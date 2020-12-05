#include <ESP8266WiFi.h> // esp8266 library
#include <ESP8266HTTPClient.h>
#include <FirebaseESP8266.h> // firebase library
#include <ArduinoJson.h>
#include "DHT.h"

#define WIFI_SSID "Keenetic-7388"
#define WIFI_PASSWORD "hberabulut"
#define FIREBASE_HOST "iot-test-7444b.firebaseio.com"
#define FIREBASE_AUTH "0rjh7xSpcSEVnLjpLGRawQfhOHCn5WzwBQkomtkw"
#define DHTTYPE DHT11      // DHT11 SENSOR
#define DEVICE_ID "100001" // Unique id for this device

FirebaseData firebaseData;

const char *Host = "www.googleapis.com";
String thisPage = "/geolocation/v1/geolocate?key=";
String key = "AIzaSyCgHOaADgq3qx7jxqZScVOBT_Jizw3GmTo"; // Google Cloud Api key for GEOLOCATION Api

uint8_t DHTPin = D2;
DHT dht(DHTPin, DHTTYPE); // Initialize DHT sensor.

void setup()
{
  Serial.begin(9600);

  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");

  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(500);
  }

  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());

  pinMode(DHTPin, INPUT);
  dht.begin();
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop()
{
  char bssid[6];
  DynamicJsonBuffer jsonBuffer;
  Serial.println("network scan start for to find location");

  // WiFi.scanNetworks will return the number of networks found
  int n = WiFi.scanNetworks();
  Serial.println("network scan is done");

  float temperature = dht.readTemperature(); // Gets the values of the temperature
  float humidity = dht.readHumidity();
  useSensorData(temperature, humidity); // update firebase with dht11 sensor data

  // now build the jsonString...
  String jsonString = "{\n";
  jsonString = buildJSONString(jsonString, n);

  //Connect to the client and make the api call
  WiFiClientSecure client;
  client.setInsecure();
  client = makeHttpRequest(client, Host, thisPage, key, jsonString);

  //Read and parse all the lines of the reply from server
  while (client.available())
  {
    String line = client.readStringUntil('\r');
    if (true)
    {
      Serial.print(line);
    }
    JsonObject &root = jsonBuffer.parseObject(line);
    if (root.success())
    {
      double latitude = root["location"]["lat"];
      double longitude = root["location"]["lng"];
      double accuracy = root["accuracy"];

      String firebaseLocation[2] = {"/", "/"};

      firebaseLocation[0] += DEVICE_ID;
      firebaseLocation[0] += "/location/latitude";

      firebaseLocation[1] += DEVICE_ID;
      firebaseLocation[1] += "/location/longitude"

      updateFirebaseLocation(firebaseLocation[0], latitude);
      updateFirebaseLocation(firebaseLocation[1], longitude);
    }
  }

  Serial.println("closing client connection\n");
  client.stop();

  delay(15000); // update temperature and location every 15 seconds
}

String buildJSONString(String jsonString, int numberOfNetworks) // building geolocation api's body
{
  // now build the jsonString...
  jsonString = "{\n";
  jsonString += "\"homeMobileCountryCode\": 234,\n"; // this is a real UK MCC
  jsonString += "\"homeMobileNetworkCode\": 27,\n";  // and a real UK MNC
  jsonString += "\"radioType\": \"gsm\",\n";         // for gsm
  jsonString += "\"carrier\": \"Vodafone\",\n";      // associated with Vodafone
  jsonString += "\"wifiAccessPoints\": [\n";
  for (int j = 0; j < numberOfNetworks; ++j)
  {
    jsonString += "{\n";
    jsonString += "\"macAddress\" : \"";
    jsonString += (WiFi.BSSIDstr(j));
    jsonString += "\",\n";
    jsonString += "\"signalStrength\": ";
    jsonString += WiFi.RSSI(j);
    jsonString += "\n";
    if (j < numberOfNetworks - 1)
    {
      jsonString += "},\n";
    }
    else
    {
      jsonString += "}\n";
    }
  }
  jsonString += ("]\n");
  jsonString += ("}\n");

  return jsonString;
}

WiFiClientSecure makeHttpRequest(WiFiClientSecure client, const char *Host, String thisPage, String key, String jsonString) // function for to make a request to geolocation api
{
  if (client.connect(Host, 443))
  {
    Serial.println("Connected");
    client.println("POST " + thisPage + key + " HTTP/1.1");
    client.println("Host: " + (String)Host);
    client.println("Connection: close");
    client.println("Content-Type: application/json");
    client.println("User-Agent: Arduino/1.0");
    client.print("Content-Length: ");
    client.println(jsonString.length());
    client.println();
    client.print(jsonString);
    delay(200);
  }
  return client;
}

void updateFirebaseLocation(String location, double field)
{
  if (Firebase.setDouble(firebaseData, location, field))
  { // On successful Write operation, function returns 1
    Serial.println("Firebase database updated\n");
    delay(150);
  }
  else
  {
    Serial.println(firebaseData.errorReason());
  }
}

void updateFirebaseDHT(String location, float field)
{
  if (Firebase.setFloat(firebaseData, location, field))
  { // On successful Write operation, function returns 1
    Serial.println("Firebase database updated\n");
    delay(150);
  }
  else
  {
    Serial.println(firebaseData.errorReason());
  }
}
 
void useSensorData(float temperature, float humidity)
{
  String firebaseLocation[2] = {"/", "/"};

  firebaseLocation[0] += DEVICE_ID;
  firebaseLocation[0] += "/sensor/temperature";

  firebaseLocation[1] += DEVICE_ID;
  firebaseLocation[1] += "/sensor/humidity";

  updateFirebaseDHT(firebaseLocation[0], temperature);
  updateFirebaseDHT(firebaseLocation[1], humidity);
}
const createUserIp = "https://1i1k1m5453.execute-api.us-east-1.amazonaws.com/dev/createUser";

const loginIp = "https://1i1k1m5453.execute-api.us-east-1.amazonaws.com/dev/login";

const locationIp = "https://1i1k1m5453.execute-api.us-east-1.amazonaws.com/dev/getLocationData";

export const createUser = async (received) => {
  try {
    let response = await fetch(createUserIp, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
	  }),
	  redirect: "follow",
      body: received,
    });

    let data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};


export const loginUser = async (received) => {
  try {
    let response = await fetch(loginIp, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
	  }),
	  redirect: "follow",
      body: received,
    });

    let data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchLocation = async (received) => {
  try {
    let response = await fetch(locationIp, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
	  }),
	  redirect: "follow",
      body: received,
    });

    let data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

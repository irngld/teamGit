function getPosition() {

    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    });
}
  
const bigBrother = async () => { return await getPosition() };

export default bigBrother;
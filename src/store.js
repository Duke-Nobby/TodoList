const STORAGE_KEY = "todotype";
export default{
  fetch(){
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]');
  },
  store(todos){
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(todos));
  }
}

import axios from "axios";

export function getTemas() {
    axios.get(`http://url.com/temas`)
      .then(res => {
        const temas = res.data;
      })
}

export function getTema(id) {
    axios.get(`https://url.com/temas/${id}`)
      .then(res => {
        const tema = res.data;
      })
}
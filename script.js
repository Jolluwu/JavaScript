const obtenerValorInput= () =>{
let inputTexto=document.getElementById("input_pais")
let valor=inputTexto.value
peticionApi(valor)

}
const peticionApi= (pais) =>{
    const baseUrl= 'https://restcountries.com/v3.1/';
    const endpoint=`name/${pais}`;
    const url=`${baseUrl}${endpoint}`; 

axios
    .get(url)
    .then((res) => printData(res.data))
    .catch((err) => console.log(err));
}


    
const printData = (data) => {
    let respuesta = document.getElementById('show-info');
    respuesta.innerHTML = `
    <img src="${data[0].flags.png}" alt="Bandera de ${data[0].name.common}" style="display: block; margin: 0 auto; width: 200px;" />
    <p><label>Capital:</label> <h4>${data[0].capital ? data[0].capital[0] : ''}</h4></p>
    <p><label>Población:</label> <h4>${data[0].population ? data[0].population.toLocaleString() : ''}</h4></p>
    <p><label>Área:</label> <h4>${data[0].area ? `${data[0].area.toLocaleString()} km²` : ''}</h4></p>
    <p><label>Región:</label> <h4>${data[0].region || ''}</h4></p>
    <p><label>Subregión:</label> <h4>${data[0].subregion || ''}</h4></p>
    <p><label>Idiomas:</label> <h4>${data[0].languages ? Object.values(data[0].languages).join(', ') : ''}</h4></p>
`;
}
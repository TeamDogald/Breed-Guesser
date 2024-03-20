

function FetchData() {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => setData(res.data))
        .catch(err => console.log(err))

    }, [])
    return 
}
   
export default FetchData
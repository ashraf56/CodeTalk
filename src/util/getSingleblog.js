
const getSingleblog = async(id) => {
    let base_url = process.env.BaseUrl;

    try {
        
let res = await fetch(`${base_url}/api/blog/${id}`, {cache:'no-cache'})
if (!res.ok) {
    throw new Error("error") 
}
let data = res.json()
return data;
    } catch (error) {
        console.log(error);
    }
  
};

export default getSingleblog;
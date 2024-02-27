

const getBlogs = async() => {
    let base_url = process.env.BaseUrl;

    try {
        let res = await fetch(`${base_url}/api/blog`, { cache: "no-store" });
      
      if (!res.ok) {
        throw new Error("data load failed");
      }
      let data = res.json()
      return data;
    } catch (error) {
        console.log(error);
    }
};

export default getBlogs;
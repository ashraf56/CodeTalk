// export const getUser = async () => {

//     let base_url = process.env.BaseUrl;
//     try {
//       let res = await fetch(`${base_url}/api/user`, { cache: "no-store" });
      
//       if (!res.ok) {
//         throw new Error("data load failed");
//       }
//       let data = res.json()
//       return data;
//     } catch (error) {
//       console.log(error.toString());
//     }
//   };
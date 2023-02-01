import 'dotenv/config.js' 
import app from './app.js'

const BackendConnection=async()=>{
  try{
    app.listen(process.env.PORT, () => {
      console.log(`Server on port ${process.env.PORT}`); 
    });
  
  }catch(error){
    console.log(error)
  }
}

BackendConnection()
import { connect } from "mongoose"

const connection=(url)=>connect(url,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>console.log('Connection DB'))

export default connection
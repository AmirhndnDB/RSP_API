declare module "mongoose-timestamp" {
  import { Schema } from "mongoose";

  function timeStamp(schema: Schema): void;

  export default timeStamp;
}

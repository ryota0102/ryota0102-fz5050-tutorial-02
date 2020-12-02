import { Form, Formik, Field} from 'formik';

//Fomikにあてるフォーム用のデータ構造
import {VtuberDetails} from '../interfaces/vtuberdetails';


//Formik用データ構造初期値
const initialValues: VtuberDetails ={
   fullName:'', 
   height:0,
   language:[],
   details:'',
   groupid:-1,
   inAction:false
};

const FormDemo = ()=>{

   return (
       <div>
           {/*入力フォームにFormikを利用する */}
           <Formik initialValues={initialValues} onSubmit={ ()=>{} }>
               {( {values} ) => (
                   <Form>

                        <Field name ="fullName"/>

                        <Field name ="height" type="number"/>

                        <Field name ="language" value="japanese" type="checkbox"/>
                        <Field name ="language" value="english" type="checkbox"/>
                        <Field name ="language" value="other" type="checkbox"/>

                        <Field name ="details" as="textarea"/>
                        
                        <Field name ="groupid" as="select">
                           <option value={-1}>----</option>
                           <option value={0}>freelance</option>
                           <option value={1}>VOMS</option>
                           <option value={2}>holostars</option>
                           <option value={3}>nijisanji</option>
                           <option value={4}>hololive</option>
                           <option value={5}>animare</option>
                       </Field>

                       <Field name ="inAction" type="checkbox"/>

                       <pre>{JSON.stringify(values,null,4)}</pre>
                   </Form>
               )}
           </Formik>
       </div>
   );
}

export default FormDemo
import { type } from 'os'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { table } from 'console'
type btnProps = {
  btnValue: string,
  btnClick: any,
}
type inpProps = {
  inputValue: string,
  inputType: string,
  inputOnChange: any,
}
type tableProps = {
  arrofTable: any[],
  cols: any[]
}
type cardtype = {
  img: any,
  // cardProps:any,
  id: number,
  userName: string,
  age: number,
  institute: string,
  isActive: boolean,
  category: string
}
type selectType = {
  label:string,
  options:any[],
  getValue : any,
  // val:any
}

function Button(props: btnProps) {
  const { btnValue, btnClick } = props
  return (
    <button className='btn btn-primary p-2  m-5' onClick={btnClick} >{btnValue}</button>
  )
}
function Input(props: inpProps) {
  const { inputValue, inputOnChange, inputType } = props
  return (
    <input className=' w-25 rounded p-2 m-3  bg-primary text-white' value={inputValue} type={inputType} onChange={inputOnChange} />
  )
}
function Table(props: tableProps) {
  const { arrofTable, cols } = props
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            {cols.map((x, i) => {
              return (
                <th className='text-primary'>{x.heading}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {arrofTable.map((x, i) => {
            return (
              <tr>
                {cols.map((y, j) => {
                  return (
                    <td className='text-primary'>{x[y.key]}</td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

}

function Card({ cardProps }: { cardProps: cardtype }) {
  const { img, id, userName, age, institute, isActive, category } = cardProps
  return (
    <div className='border rounded my-5'>
      <p>{img}</p>
      <p>Id:{id}</p>
      <p>User Name:{userName}</p>
      <p>Age:{age}</p>
      <p>Institute:{institute}</p>
      <p>isActive:{isActive?"Yes":"No"}</p>
      <p>Category:{category}</p>
    </div>
  )
}

function Select(selectProps:selectType){
  const {label,options,getValue,} = selectProps
let changeVal = (val:any)=>{
    getValue(val)
  }
  return(
    <div>
      <p className='text-white'>{label}</p>
      <select className='w-50 bg-primary text-white p-3 border rounded' onChange={(e) => changeVal(e.target.value)}>
        {options.map((x,i) => {
          return(
            <option key={i} value={x.value}>{x.displayName}</option>
          )
        })}
      </select>
    </div>
  )
}


export { Button, Input, Table, Card ,Select}
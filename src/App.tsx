import { useDispatch, useSelector } from "react-redux"
import { Itodo } from "./types/types"
import { del, openAddModal, setAddName, setAddage, infoClose, InfoFunc, setAddEamil, setAddImage, setAddStatus, setAddCity, saveAddUser, setEditName, setEditage, setEditEamil, setEditImage, setEditStatus, setEditCity, openEditModal, openEdiModal, saveEditUser, setSearch, setSelectStatus } from "./store/todoListSlice/todolictCounter/todoList"
import { Drawer } from "antd"
const App = () => {
  let data: Itodo[] = useSelector((store) => store.counter.data)
  let AddModal = useSelector((store) => store.counter.AddModal)
  let EditModal = useSelector((store) => store.counter.EditModal)
  let inpName = useSelector((store) => store.counter.inpName)
  let inpAge = useSelector((store) => store.counter.inpAge)
  let inpEmail = useSelector((store) => store.counter.inpEmail)
  let inpImage = useSelector((store) => store.counter.inpImage)
  let inpstatus = useSelector((store) => store.counter.inpstatus)
  let inpCity = useSelector((store) => store.counter.inpCity)
  let inpNameInfo = useSelector((store) => store.counter.inpNameInfo)
  let inpAgeInfo = useSelector((store) => store.counter.inpAgeInfo)
  let inpEmailInfo = useSelector((store) => store.counter.inpEmailInfo)
  let inpImageInfo = useSelector((store) => store.counter.inpImageInfo)

  let inpstatusInfo = useSelector((store) => store.counter.inpstatusInfo)
  let inpCityInfo = useSelector((store) => store.counter.inpCityInfo)
  let inpNameEdit = useSelector((store) => store.counter.inpNameEdit)
  let inpAgeEdit = useSelector((store) => store.counter.inpAgeEdit)
  let inpEmailEdit = useSelector((store) => store.counter.inpEmailEdit)
  let inpImageEdit = useSelector((store) => store.counter.inpImageEdit)
  let inpstatusEdit = useSelector((store) => store.counter.inpstatusEdit)
  let inpCityEdit = useSelector((store) => store.counter.inpCityEdit)
  let inpSearch = useSelector((store) => store.counter.inpSearch)
  let openDarwel = useSelector((store) => store.counter.openDarwel)
  let selectStatus = useSelector((store) => store.counter.selectStatus)
  let dispatch = useDispatch()
  return (
    <>
      <Drawer title="Info of User" open={openDarwel} onClose={() => dispatch(infoClose(false))}>
        <div className="mt-auto w-[100%]">
          <div className="w-[80%] m-auto">
            <img src={inpImageInfo} alt="" />
          </div>
          <div className="w-[90%] mt-[60px]">
            <h1 className="w-[90%] m-auto flex justify-between"><span className="text-[30px]">Name:</span><span className="text-[30px] text-[grey]">{inpNameInfo}</span></h1>
            <h1 className="w-[90%] m-auto flex justify-between items-center"><span className="text-[30px]">Email:</span><span className="text-[20px] text-[grey]">{inpEmailInfo}</span></h1>
            <h1 className="w-[90%] m-auto flex justify-between items-center"><span className="text-[30px]">Age:</span><span className="text-[20px] text-[grey]">{inpAgeInfo}</span></h1>
            <h1 className="w-[90%] m-auto flex justify-between items-center"><span className="text-[30px]">City:</span><span className="text-[20px] text-[grey]">{inpCityInfo}</span></h1>
            <h1 className="w-[90%] m-auto flex justify-between items-center mt-[10px]"><span className="text-[30px]">Status:</span>{inpstatusInfo && (
              <span className="p-[10px] text-[20px] bg-[green] text-[white] rounded-lg">Active</span>
            )}
              {!inpstatusInfo && (
                <span className="p-[10px] text-[20px] bg-[red] text-[white] rounded-lg">Inactive</span>
              )}</h1>
          </div>
        </div>
      </Drawer>
      {AddModal && (
        <div className="w-[400px] flex flex-col gap-[20px] absolute bg-[#bdbaba] p-[10px] items-center left-[500px] top-[160px] rounded-[30px]">
          <input value={inpName} onChange={(e) => dispatch(setAddName(e.target.value))} type="text" className="w-[240px] h-[40px] border rounded-lg p-[10px] mt-[20px]" placeholder="Name..." />
          <input value={inpEmail} onChange={(e) => dispatch(setAddEamil(e.target.value))} type="text" className="w-[240px] h-[40px] border rounded-lg p-[10px]" placeholder="Eamil" />
          <input value={inpAge} onChange={(e) => dispatch(setAddage(e.target.value))} type="text" className="w-[240px] h-[40px] border rounded-lg p-[10px]" placeholder="Age..." />
          <input value={inpImage} onChange={(e) => dispatch(setAddImage(e.target.value))} type="text" className="w-[240px] h-[40px] border rounded-lg p-[10px]" placeholder="Image..." />
          <input value={inpCity} onChange={(e) => dispatch(setAddCity(e.target.value))} type="text" className="w-[240px] h-[40px] border rounded-lg p-[10px]" placeholder="City..." />
          <select value={inpstatus} onChange={(e) => dispatch(setAddStatus(e.target.value))} className="w-[140px] h-[40px] bg-[blue] text-white rounded-xl text-center" name="" id="">
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
          <div className="w-[90%] m-auto flex justify-between p-[10px]">
            <button onClick={() => dispatch(saveAddUser(false))} className="p-[4px] text-[17px] bg-[blue] text-[white] rounded-lg w-[60px]">Save</button>
            <button onClick={() => dispatch(openAddModal(false))} className="p-[4px] text-[17px] bg-[red]  text-[white] rounded-lg w-[60px]">Cansel</button>
          </div>
        </div>

      )}
      {EditModal && (
        <div className="w-[400px] flex flex-col gap-[20px] absolute bg-[#bdbaba] p-[10px] items-center left-[500px] top-[160px] rounded-[30px]">
          <input value={inpNameEdit} onChange={(e) => dispatch(setEditName(e.target.value))} type="text" className="w-[240px] h-[40px] border rounded-lg p-[10px] mt-[20px]" placeholder="Name..." />
          <input value={inpEmailEdit} onChange={(e) => dispatch(setEditEamil(e.target.value))} type="text" className="w-[240px] h-[40px] border rounded-lg p-[10px]" placeholder="Eamil" />
          <input value={inpAgeEdit} onChange={(e) => dispatch(setEditage(e.target.value))} type="text" className="w-[240px] h-[40px] border rounded-lg p-[10px]" placeholder="Age..." />
          <input value={inpImageEdit} onChange={(e) => dispatch(setEditImage(e.target.value))} type="text" className="w-[240px] h-[40px] border rounded-lg p-[10px]" placeholder="Image..." />
          <input value={inpCityEdit} onChange={(e) => dispatch(setEditCity(e.target.value))} type="text" className="w-[240px] h-[40px] border rounded-lg p-[10px]" placeholder="City..." />
          <select value={inpstatusEdit} onChange={(e) => dispatch(setEditStatus(e.target.value))} className="w-[140px] h-[40px] bg-[blue] text-white rounded-xl text-center" name="" id="">
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
          <div className="w-[90%] m-auto flex justify-between p-[10px]">
            <button onClick={() => dispatch(saveEditUser(false))} className="p-[4px] text-[17px] bg-[blue] text-[white] rounded-lg w-[60px]">Save</button>
            <button onClick={() => dispatch(openEdiModal(false))} className="p-[4px] text-[17px] bg-[red]  text-[white] rounded-lg w-[60px]">Cansel</button>
          </div>
        </div>

      )}
      <h1 className="text-[40px] text-center">Users list</h1>
      <div className="w-[90%] m-auto mt-[40px] flex justify-between">
        <button onClick={() => dispatch(openAddModal(true))} className="w-[140px] h-[40px] bg-[blue] text-white rounded-xl">ADD USER</button>
        <input value={inpSearch} onChange={(e) => dispatch(setSearch(e.target.value))} type="text" placeholder="Search..." className="w-[240px] h-[40px] border rounded-lg p-[10px]" />
        <select value={selectStatus} onChange={(e) => dispatch(setSelectStatus(e.target.value))} id="" className="w-[140px] h-[40px] bg-[blue] text-white rounded-xl text-center" >
          <option value="">All</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </div>
      <table className="w-[90%] m-auto mt-[50px]">
        <thead>
          <tr>
            <td className="text-[20px] w-[200px] text-center">Name</td>
            <td className="text-[20px] w-[200px] text-center">Age</td>
            <td className="text-[20px] w-[200px] text-center">City</td>
            <td className="text-[20px] w-[200px] text-center">Status</td>
            <td className="text-[20px] w-[200px] text-center">Action</td>
          </tr>
        </thead>
        <tbody>
          {data.filter((e) => e.name.toLowerCase().includes(inpSearch.toLowerCase())).filter((e) => e.status.toString().includes(selectStatus)).map((e) =>
            <tr className="h-[90px]" key={e.id}>
              <td className="w-[200px]"><div className="w-[100%] flex gap-[20px]">
                <div>
                  <img className="w-[70px] h-[70px]" src={e.image} alt="" />
                </div>
                <div>
                  <h1 className="text-[20px]">{e.name}</h1>
                  <p className="text-[17px] text-[grey]">{e.email}</p>
                </div>
              </div></td>
              <td className="w-[200px] text-center text-[25px] ">
                {e.age}
              </td>
              <td className="w-[200px] text-center text-[25px] ">
                {e.city}
              </td>
              <td className="text-center">
                {e.status && (
                  <span className="p-[10px] text-[20px] bg-[green] text-[white] rounded-lg">Active</span>
                )}
                {!e.status && (
                  <span className="p-[10px] text-[20px] bg-[red] text-[white] rounded-lg">Inactive</span>
                )}
              </td>
              <td className="w-[200px]">
                <div className="w-[100%] flex  justify-evenly">
                  <button onClick={() => dispatch(del(e.id))} className="p-[4px] text-[17px] bg-[red]  text-[white] rounded-lg w-[60px]">Delete</button>
                  <button onClick={() => dispatch(openEditModal(e))} className="p-[4px] text-[17px] bg-[blue] text-[white] rounded-lg w-[60px]">Edit</button>
                  <button onClick={() => dispatch(InfoFunc(e))} className="p-[4px] text-[17px] bg-[green] text-[white] rounded-lg w-[60px]">Info</button>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default App
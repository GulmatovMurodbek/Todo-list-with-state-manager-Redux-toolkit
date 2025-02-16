import { createSlice } from '@reduxjs/toolkit'
import { TarrTodos } from '../../../types/types'


const initialState: TarrTodos = {
    data: [
        {
            name: "Safar",
            id: "1",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s",
            city: "Dushanbe",
            age: "21",
            email: "safar@gmail.com",
            status: false
        },
        {
            name: "Shakhzod",
            id: "2",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s",
            city: "Bokhtar",
            age: "21",
            email: "safar@gmail.com",
            status: true
        }
    ],
    inpName: "",
    inpAge: "",
    inpCity: "",
    inpImage: "",
    inpEmail: "",
    inpstatus: "true",

    inpNameEdit: "",
    inpAgeEdit: "",
    inpCityEdit: "",
    inpImageEdit: "",
    inpEmailEdit: "",
    inpstatusEdit: "",


    inpNameInfo: "",
    inpAgeInfo: "",
    inpCityInfo: "",
    inpImageInfo: "",
    inpEmailInfo: "",
    inpstatusInfo: "",

    idx: null,

    AddModal: false,


    EditModal: false,

    inpSearch:"",
    selectStatus:"",
    openDarwel:false,

}

export const tableUser = createSlice({
    name: "table-users",
    initialState,
    reducers: {
        del: (state, action) => {
            state.data = state.data.filter((e) => {
                return e.id != action.payload
            })
        },
        openAddModal: (state, action) => {
            state.AddModal = action.payload
        },
        openEdiModal: (state, action) => {
            state.EditModal = action.payload
        },
        setAddName: (state, action) => {
            state.inpName = action.payload
        },
        setAddage: (state, action) => {
            state.inpAge = action.payload
        },
        setAddEamil: (state, action) => {
            state.inpEmail = action.payload
        },
        setAddImage: (state, action) => {
            state.inpImage = action.payload
        },
        setAddStatus: (state, action) => {
            state.inpstatus = action.payload
        },
        setAddCity: (state, action) => {
            state.inpCity = action.payload
        },
        setInfoName: (state, action) => {
            state.inpNameInfo = action.payload
        },
        setInfoage: (state, action) => {
            state.inpAgeInfo = action.payload
        },
        setInfoEamil: (state, action) => {
            state.inpEmailInfo = action.payload
        },
        setInfoImage: (state, action) => {
            state.inpImageInfo = action.payload
        },
        setInfoStatus: (state, action) => {
            state.inpstatusInfo = action.payload
        },
        setInfoCity: (state, action) => {
            state.inpCityInfo = action.payload
        },
        setEditName: (state, action) => {
            state.inpNameEdit = action.payload
        },
        setEditage: (state, action) => {
            state.inpAgeEdit = action.payload
        },
        setEditEamil: (state, action) => {
            state.inpEmailEdit = action.payload
        },
        setEditImage: (state, action) => {
            state.inpImageEdit = action.payload
        },
        setEditStatus: (state, action) => {
            state.inpstatusEdit = action.payload
        },
        setEditCity: (state, action) => {
            state.inpCityEdit = action.payload
        },
        setSearch: (state, action) => {
            state.inpSearch = action.payload
        },
        saveAddUser: (state) => {
            state.data = [...state.data, { name: state.inpName, age: state.inpAge, city: state.inpCity, image: state.inpImage, email: state.inpEmail, status: state.inpstatus == "true" ? true : false, id: Date.now() }]
            state.AddModal = false
            state.inpName = '';
            state.inpAge = '';
            state.inpCity = '';
            state.inpImage = '';
            state.inpEmail = '';
            state.inpstatus = 'true';
        },
        openEditModal: (state, action) => {
            state.EditModal = true
            state.inpNameEdit = action.payload.name
            state.inpAgeEdit = action.payload.age
            state.inpEmailEdit = action.payload.email
            state.inpImageEdit = action.payload.image
            state.inpCityEdit = action.payload.city
            state.inpstatusEdit =action.payload.status ?"true":"false"
            state.idx = action.payload.id
        },
        setSelectStatus:(state,action)=>
        {
             state.selectStatus = action.payload
        },
        saveEditUser: (state) => {
            state.data = state.data.map((e) => {
              if(e.id == state.idx)
              {
                return {...e,name: state.inpNameEdit, age: state.inpAgeEdit, city: state.inpCityEdit, image: state.inpImageEdit, email: state.inpEmailEdit, status: state.inpstatusEdit == "true" ? true : false}
              }
              return e 
            })
            state.EditModal=false
        },
        InfoFunc :(state,action)=>
        {
             state.openDarwel = true
             state.inpEmailInfo =action.payload.email
             state.inpNameInfo = action.payload.name
             state.inpAgeInfo = action.payload.age
             state.inpCityInfo = action.payload.city
             state.inpImageInfo = action.payload.image
             state.inpstatusInfo = action.payload.status
        },
        infoClose :(state,action) =>
        {
            state.openDarwel = action.payload
        }
    }

})
export const { del, openAddModal, setAddName,infoClose, setAddage, setAddEamil, setAddImage, setAddStatus, setAddCity, saveAddUser, setEditName, setEditage, setEditEamil, setEditImage, setEditStatus, setEditCity, openEditModal, openEdiModal,saveEditUser,setSearch,InfoFunc,setSelectStatus } = tableUser.actions
export default tableUser.reducer
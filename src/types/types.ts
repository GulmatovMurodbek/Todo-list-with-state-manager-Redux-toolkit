export type Itodo ={
    name:string
    age:string | number
    email:string
    image:string
    city:string
    id:number | string,
    status:boolean
}

export type TarrTodos ={
    data: Itodo[];  // Масиви Itodo
    inpName: string;
    inpAge: string;
    inpCity: string;
    inpImage: string;
    inpEmail: string;
    inpstatus: string;
    inpNameEdit: string;
    inpAgeEdit: string;
    inpCityEdit: string;
    inpImageEdit: string;
    inpEmailEdit: string;
    inpstatusEdit: string;
    inpNameInfo: string;
    inpAgeInfo: string;
    inpCityInfo: string;
    inpImageInfo: string;
    inpEmailInfo: string;
    inpstatusInfo: string;
    idx: number | null;
    AddModal: boolean;
    EditModal: boolean;
    inpSearch: string;
    selectStatus: string;
    openDarwel: boolean;
}
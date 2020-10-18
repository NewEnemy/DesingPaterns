class Cup{
    constructor(CupBulider){
        this.Color = CupBulider.Color
        this.Height = CupBulider.Height
        this.Diamiter =CupBulider.Diamiter


        this.Pattern =CupBulider.Pattern
        this.HowManyEars =CupBulider.HowManyEars
        this.WithTheHoles = CupBulider.WithTheHoles
    }
}



export default class CupBulider{

constructor(Color,Height,Diamiter){

    this.Color=Color
    this.Height = Height
    this.Diamiter = Diamiter

    //Defaults
    this.HowManyEars = 1
    this.Pattern  = "squeres"
    this.WithTheHoles = false
}

withPattern(pattern){
    this.Pattern = pattern
    return this
}
withHowManyEars(ears){
    this.HowManyEars = ears
    return this
}

withWithHoles(holes){
    this.WithTheHoles=holes
    return this
}

build(){
    let errors = this.validateCup()
    if (errors.length>0){ throw new Error(errors)}
    return new Cup(this)
}

validateCup(){
    let e=[];
    var objInts = {
        Height:this.Height,
        Diamiter:this.Diamiter,
        HowManyEars:this.HowManyEars
    }
    var objStrings={
        Color:this.Color,
        Pattern: this.Pattern
    }
    var objBools={
        withWithHoles:this.WithTheHoles
    }
    for (const key in objInts) {
     if( !this.isInt(objInts[key])){e.push(key+" needs to be a number")}
    }
    for (const key in objStrings) {
     if( !this.isString(objStrings[key])){e.push(key+" needs to be a string")}
    }
    for (const key in objBools) {
     if( !this.isBool(objBools[key])){e.push(key+" needs to be a bool")}
    }
   return e
}
isInt(element){
    if(element==null) {return true;}
    return typeof(element)=='number'
}
isString(element){
    if(element==null) {return true;}
   return typeof(element)=='string'
}
isBool(element){
    if(element==null) {return true;}
    return typeof(element)=='boolean'
}
}


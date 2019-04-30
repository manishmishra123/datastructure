function Hashtable(){
    this.size = 0;
    this.dataStore = {};
}

Hashtable.prototype.clear = function(){
    this.size = 0;
    this.dataStore = {};
    return this.dataStore;
}
Hashtable.prototype.remove = function(key){
    if(this.dataStore.hasOwnProperty(key)){
        delete this.dataStore[key];
        this.size -=1;
        return this.dataStore;
    }
}
Hashtable.prototype.size = function(){
    return this.size;
}
Hashtable.prototype.toString = function(){
    return String(this.dataStore);
}

Hashtable.prototype.contains = function(key){
    if(this.dataStore.hasOwnProperty(key)){
        return true;
    } else{
        return false;
    }
   
}

Hashtable.prototype.enumerate = function(){
    for(var element in this.dataStore){
        console.log(element +" " +this.dataStore[element]);
    }
}

Hashtable.prototype.isEmpty = function(){
    return this.size >0 ? false: true;
}
Hashtable.prototype.put = function(key,value){
    if(this.dataStore.hasOwnProperty(key)){
        throw new Error("Hashtable cannot contains duplicate");
    } else{
        this.dataStore[key] = value;
        this.size +=1;
        return this.dataStore;
    }
}

    
var ht = new Hashtable();

console.log(ht.put('color','red'));
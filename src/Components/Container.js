import React, { Component } from 'react';
import InputAmount from  './InputAmount'
class Container extends Component{
    constructor(props){
        super(props);
        this.notes = [2000,500,200,100,50,20,10,5,2,1];
        this.state = {
            denominations:this.notes.map(item=>0),
            showDeno:false,
            foundDenominations:[]
        }
        this.getDenomination = this.getDenomination.bind(this);
    }

    componentDidMount(){
    }

    getDenomination(e){
       e.preventDefault(); 
       this.setState((prev)=>{
        return {
            showDeno:false,
            foundDenominations:[]
         };
       })
       const amount = parseInt(e.target[0].value); 
       if(isNaN(amount) || amount < 1){
           alert("Not valid amount");
           return;
       };
       const deno= this.calculateDenomination(amount,this.notes,this.state.denominations);

       this.setState((prev)=>{
        return {
            showDeno:true,
            foundDenominations:deno
         };
       })
    }

    calculateDenomination(amount,presentNotes,denominations){
        let notes =  [...presentNotes];
        let noteCounter = [...denominations] 
        for(let i=0;i<presentNotes.length;i++){
            if(amount >= notes[i]){
                noteCounter[i] = parseInt(amount/notes[i]);
                amount = amount - (noteCounter[i] * notes[i]);
            }
        }


        console.log("Currency Here");

        for(let i=0;i<10;i++){
            if(noteCounter[i] != 0){
                console.log("Notes: "+notes[i]+" Number:"+noteCounter[i])
            }else{
                console.log("Notes: "+notes[i]+" Number:0") 
            }
        }  
        
        return noteCounter;
        
    }

    render(){
        return (<section className="container">
            <InputAmount getDenomination={this.getDenomination} />
            <div className="deno">
            {this.state.showDeno && this.state.foundDenominations.map((item,i)=>{
               return  <p key={i}>{item+" notes of Rs"+this.notes[i]}</p>;
            })}
            </div>
        </section>);
    }

}

export default Container;
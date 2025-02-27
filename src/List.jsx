function List(){
    const fruits=[{id:1,name:"apple",calories:95},
                 {id:2,name:"banana",calories:105},
                 {id:3,name:"grapes",calories:45},
                 {id:4,name:"orange",calories:32}]

    //fruits.sort((a,b) =>a.name.localeCompare(b.name));//Albhabetical
    fruits.sort((a,b) =>b.name.localeCompare(a.name));//reverse order
    //fruits.sort((a,b) =>a.calories-b.calories);//ascending order
    //fruits.sort((a,b)=>b.calories-a.calories);

    //const lowcalfruits=fruits.filter(fruit=>fruit.calories<100);
    //const highcalfruits=fruits.filter(fruit=>fruit.calories>=100);





   const listItems=fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b>  
                                            
                                        </li>);


    /*const listItems=lowcalfruits.map(lowcalfruit => <li key={lowcalfruit.id}>
                                            {lowcalfruit.name}: &nbsp;
                                            <b>{lowcalfruit.calories}</b>  
                                            
                                        </li>);*/

    /*const listItems=highcalfruits.map(highcalfruit => <li key={highcalfruit.id}>
                                            {highcalfruit.name}: &nbsp;
                                            <b>{highcalfruit.calories}</b>  
                                            
                                        </li>);*/

    //return(fruits);
    return(<ol>{listItems}</ol>);

}
export default List;
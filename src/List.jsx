function List(){

    const fruits =[{id:1, name: "Apple", calories:10},
                   {id:2, name:"Watermellon", calories:11}, 
                   {id:3, name:"Banana", calories:12}];

    fruits.sort((a,b) => a.name.localCompare(b.name))
    ;

    const listItemsFruit = fruits.map(fruit=><li key={fruit.id}>{fruit.name}
    {fruit.calories}</li>);

    return(
        <>
        <ol>{listItemsFruit}</ol>
        </>
    );
}

export default List
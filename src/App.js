import React, { useState, useEffect } from 'react';

function App() {
  

  const [count, setCount] = useState(0);

  useEffect(() => {
    
    document.text = `Contador: ${count}`;
  }, [count]);
  
  
  return (
    <div className="min-w-[100vh] min-h-[100vh] bg-gradient-to-r from-blue-500 via-purple-400 to-blue-500 mr-4" >
  
      <img className="lg:ml-64 :mr-96" src="https://scontent.fsjo5-1.fna.fbcdn.net/v/t39.30808-6/280567848_735976651175635_5451515212100973582_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LZ-hwtAU_D4AX99W7Sc&_nc_ht=scontent.fsjo5-1.fna&oh=00_AfDX_xe9lYzsu1WrD6DyZXE2TNnQ7oIweqfubLkRNOSzkg&oe=641C37F6"height="300px" width="300px"/>
   <h1 className="text-center ">Tessie es una marca de moda que se ajusta a las necesidades y requerimientos de sus clientes, brindándoles productos de calidad basados en sus gustos.</h1> 
   <br></br>
   <h1 className="text-center pl-2 bg-cyan-500"> Tessie ha sido creada para dar a conocer las capacidades y habilidades para crear prendas de vestir, al mismo tiempo brindarle servicio a nuestros clientes diseñando y confeccionando las prendas a la medida.</h1> 
   <br></br>

   <div className="Flex justify-center">
   <p className="text-center  ">Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)} className="content-center">
        Haz clic aquí 
      </button>
   
    </div> 
    </div>
  );
}


export default App;

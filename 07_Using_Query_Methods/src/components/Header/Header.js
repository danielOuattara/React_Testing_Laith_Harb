// import React from 'react';
// import "./Header.css";

// export default function Header({title}) {
//     return <h1 className="header">{title}</h1>
// }


import React from 'react';
import "./Header.css";

export default function Header({title}) {
    return (
        <>
            <h1 className="header" data-testid="header-1">React Testing Library </h1>
            <h3 title="header" className="header">{title}</h3>
        </>
    ) 
}
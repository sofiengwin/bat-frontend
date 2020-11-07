import React from "react";
import { List } from "./style";

const MatchThough = ({ name }: any) => {
  return (
    <List>
      <p className='name'>{name}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi nihil
        labore non corrupti asperiores quisquam, rerum sunt deleniti et,
        consequatur aut vitae nostrum magni, optio iusto saepe neque dolore
        recusandae.
      </p>
    </List>
  );
};

export default MatchThough;

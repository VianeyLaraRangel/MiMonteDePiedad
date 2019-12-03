import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const HomeLinks = (props) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><a href="http://bit.ly/2qYDAHa" target="_blank" rel="noopener noreferrer">Tienda</a></BreadcrumbItem>
        <BreadcrumbItem><a href="http://bit.ly/2DFEeMs" target="_blank" rel="noopener noreferrer">Empeño</a></BreadcrumbItem>
        <BreadcrumbItem><a href="http://bit.ly/2P57SzT" target="_blank" rel="noopener noreferrer">Contacto</a></BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default HomeLinks;
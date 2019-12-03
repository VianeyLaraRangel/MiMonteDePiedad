import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const HomeLinks = (props) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><a href="http://bit.ly/2qYDAHa" target="_blank">Tienda</a></BreadcrumbItem>
        <BreadcrumbItem><a href="http://bit.ly/2DFEeMs" target="_blank">Empeño</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Ayuda</a></BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default HomeLinks;
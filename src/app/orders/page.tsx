import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Orden ID</th>
            <th>Fecha</th>
            <th>Precio</th>
            <th className="hidden md:block">Productos</th>
            <th>Estatus</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">15.09.2023</td>
            <td className="py-6 px-1">200</td>
            <td className="hidden md:block py-6 px-1">Chilaquiles (2), Café (2), Postres (2)</td>
            <td className="py-6 px-1">En camino (aprox. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">15.09.2023</td>
            <td className="py-6 px-1">90</td>
            <td className="hidden md:block py-6 px-1">Chilaquiles (2), Café (2), Postres (2)</td>
            <td className="py-6 px-1">En camino (aprox. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">15.09.2023</td>
            <td className="py-6 px-1">100</td>
            <td className="hidden md:block py-6 px-1">Chilaquiles (2), Café (2), Postres (2)</td>
            <td className="py-6 px-1">En camino (aprox. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;

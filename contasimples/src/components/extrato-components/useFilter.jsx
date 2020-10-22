import { useState } from "react";

export default function Filter(empresa) {
  const [orderBy, setOrderBy] = useState("");

  const sorted = empresa.filter((emp) => emp.tipoTransacao === orderBy);

  const handleOrderBy = (pay) => {
    setOrderBy(pay);
  };

  return [sorted, handleOrderBy, orderBy];
}

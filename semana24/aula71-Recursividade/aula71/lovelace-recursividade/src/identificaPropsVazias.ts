function ehVazio(valor: any) {
  return (
    valor === "" ||
    valor === undefined ||
    valor === null ||
    valor === 0 ||
    (Array.isArray(valor) && valor.length === 0) ||
    (typeof valor === "object" && Object.values(valor).length === 0)
  );
}

export function identificaPropsVazias(obj: any) {
  const valores = Object.values(obj);

  for (const valor of valores) {
    if (ehVazio(valor)) {
      return true;
    }

    if (typeof valor === "object" && identificaPropsVazias(valor)) {
      return true;
    }
  }

  return false;
}

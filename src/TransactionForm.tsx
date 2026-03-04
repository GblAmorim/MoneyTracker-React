// Arquivo criado para testar o export default, nesse caso em App.tsx eu chamei o Teste mas o que foi mostrado foi o teste 2
//Geralmente só se tem 1 default por arquivo e raramente é necessário ter exports "nomeados" junto, só o default

export default function TransactionForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tipo:
        <br />
        <FormField text="Gasto" name="type" type="radio" value="expense" />
        <FormField text="Valor" name="type" type="radio" value="income" />
      </label>
      <br />
      <FormField text="Valor" name="amount" type="number" />
      <FormField text="Descrição" name="description" type="text" />
      <FormField text="Parcelado" name="hasInstallments" type="checkbox" />

      {/* {hasInstallments && (
        <> */}
      <FormField
        text="Quantidade de parcelas"
        name="installmentsQuantity"
        type="number"
      />
      <FormField
        text="Primeira parcela"
        name="firstInstallmentsDate"
        type="date"
      />
      {/* </>
      )} */}

      <button type="submit">Criar transação</button>
    </form>
  );
}

export function FormField({
  text,
  name,
  type,
  value,
}: {
  text: string;
  name: string;
  type: string;
  value?: "expense" | "income";
}) {
  return (
    <>
      <label>
        {text}:
        <br />
        {!value ? (
          <input name={name} type={type} />
        ) : (
          <input name={name} type={type} value={value} />
        )}
      </label>
      <br />
    </>
  );
}

import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";

export default function Clases() {
  const setQuest = formNovatosState((state) => state.setQuest);

  const onSubmit = (event) => {
    setQuest(event);
    console.log(event);
  };

  const questions = [
    {
      value: false,
      title: "No",
    },
    {
      value: true,
      title: "Si",
    },
  ];

  return (
    <FormNovatos
      title={""}
      description={"¿Qué tipo de conducción planeas hacer?"}
      questions={questions}
      onSubmit={onSubmit}
      nameForm={"clases"}
    />
  );
}

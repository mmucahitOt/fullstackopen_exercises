import { DialogButton } from "../../../components";

const DeletePersonDialog = ({ person, handlePersonDelete }) => {
  return (
    <DialogButton
      message={`delete`}
      handleDialogOpen={() => handlePersonDelete(person.id)}
      handleDialogClose={() => {}}
    />
  );
};

export default DeletePersonDialog;

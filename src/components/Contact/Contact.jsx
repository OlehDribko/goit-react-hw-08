import { useDispatch } from "react-redux";
import style from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    toast((t) => (
      <span>
        Are you sure you want to delete <b>{contact.name}</b>?
        <div style={{ marginTop: "8px", display: "flex", gap: "8px" }}>
          <button
            onClick={() => {
              dispatch(deleteContact(contact.id));
              toast.dismiss(t.id);
              toast.success(`Deletion of ${contact.name}`);
            }}
            style={{
              background: "#dc2626",
              color: "white",
              border: "none",
              padding: "4px 8px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              toast.success(`Cancelled deletion of ${contact.name}`);
            }}
            style={{
              background: "#e5e7eb",
              border: "none",
              padding: "4px 8px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Cancel
          </button>
        </div>
      </span>
    ));
  };

  return (
    <div className={style.contactBox}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>

      <button onClick={handleDelete} className={style.deleteBtn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;

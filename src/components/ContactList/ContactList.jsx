import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";


const ContactList = () => {
  const searchStr = useSelector(selectFilteredContacts);
  if (searchStr.length === 0) {
    return;
  }

  return (
    <ul className={css.list}>
      {searchStr.map(({ id, name, number }) => {
        return (
          <div key={id}>
            <Contact
            id={id}
            name={name}
              number={number}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default ContactList;

import articleStyles from "../styles/Article.module.css";

const LangItem = ({ values }) => {
  return (
    <>
      <dt>{values[0]}</dt>
      <dd>{values[1]}</dd>
    </>
  );
};

export default LangItem;

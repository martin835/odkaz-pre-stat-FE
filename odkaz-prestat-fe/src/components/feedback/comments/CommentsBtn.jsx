import { Button } from "react-bootstrap";
import { BiCommentDots } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const CommentsBtn = (props) => {
  const { t } = useTranslation();
  return (
    <div>
      <Button
        variant="outline-primary"
        className="mb-2 "
        onClick={() => {
          props.unHideComments();
          props.loadComments();
        }}
      >
        <BiCommentDots className="mr-2" />
        {t("CommentsBtn-1")}
      </Button>
    </div>
  );
};

export default CommentsBtn;

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Login from "../login/Login";
import { useState } from "react";

function UserProfile(props) {
  const loggedUser = useSelector((state) => state.loggedUser);
  const { t } = useTranslation();
  const [showUploadImage, setShowUploadImage] = useState(false);

  const formData = new FormData();
  const getImg = (e) => {
    formData.append("avatar", e.target.files[0]);
    console.log("IMAGE: ", formData);
  };

  const uploadAvatar = async () => {
    console.log(formData);
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/me/avatar`,
        {
          method: "POST",

          //credentials: "include",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
          data: formData,
        }
      );
      if (response.ok) {
        //console.log(response);
      } else {
        console.log("login failed");
        if (response.status === 400) {
          console.log("bad request");
        }
        if (response.status === 404) {
          console.log("page not found");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return loggedUser ? (
    <div className="govuk-width-container">
      <div className="govuk-grid-row ">
        <div className="govuk-grid-column-full">
          <h1 className="govuk-heading-xl heading-bigger-margin govuk-!-margin-bottom-6">
            {t("UserProfile-1")}
          </h1>

          <dl className="govuk-summary-list">
            {/* ROW START */}
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">{t("UserProfile-2")}</dt>
              <dd className="govuk-summary-list__value">{loggedUser.name}</dd>
              <dd className="govuk-summary-list__actions">
                <button
                  className="govuk-button govuk-button--secondary my-0"
                  data-module="govuk-button"
                >
                  {t("UserProfile-3")}
                </button>
              </dd>
            </div>
            {/* ROW END */}
            {/* ROW START */}
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">{t("UserProfile-4")}</dt>
              <dd className="govuk-summary-list__value">
                {" "}
                {loggedUser.surname}
              </dd>
              <dd className="govuk-summary-list__actions">
                <button
                  className="govuk-button govuk-button--secondary my-0"
                  data-module="govuk-button"
                >
                  {t("UserProfile-3")}
                </button>
              </dd>
            </div>
            {/* ROW END */}
            {/* ROW START */}
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">E-mail</dt>
              <dd className="govuk-summary-list__value"> {loggedUser.email}</dd>
              <dd className="govuk-summary-list__actions"></dd>
            </div>
            {/* ROW END */}
            {/* ROW START */}
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">Avatar</dt>
              <dd className="govuk-summary-list__value">
                <img
                  src={loggedUser?.avatar}
                  className="header-profile-pic"
                  alt="avatar"
                  referrerPolicy="no-referrer"
                ></img>
              </dd>
              <dd className="govuk-summary-list__actions">
                <button
                  className="govuk-button govuk-button--secondary my-0"
                  data-module="govuk-button"
                  onClick={() => setShowUploadImage(!showUploadImage)}
                >
                  {t("UserProfile-3")}
                </button>
              </dd>
            </div>
            {/* ROW END */}
            {/* ROW START */}
            <div
              className={
                showUploadImage
                  ? `govuk-summary-list__row`
                  : `govuk-summary-list__row d-none`
              }
            >
              <dt className="govuk-summary-list__key">Upload new image</dt>
              <dd className="govuk-summary-list__value">
                <div className="govuk-form-group">
                  <label className="govuk-label" htmlFor="file-upload-avatar">
                    Upload a file
                  </label>
                  <input
                    className="govuk-file-upload"
                    id="file-upload-avatar"
                    name="file-upload-avatar"
                    type="file"
                    onChange={getImg}
                  />
                </div>
              </dd>
              <dd className="govuk-summary-list__actions">
                <button
                  className="govuk-button govuk-button--secondary my-0"
                  data-module="govuk-button"
                  onClick={() => uploadAvatar()}
                >
                  Upload
                </button>
              </dd>
            </div>
            {/* ROW END */}
          </dl>
        </div>
      </div>
    </div>
  ) : (
    <Login />
  );
}

export default UserProfile;

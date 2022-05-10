function RecentReportsOverview() {
  return (
    <div className="govuk-width-container">
      <h2 className="govuk-heading-m heading-bigger-margin">
        Nedávne podnety:
      </h2>
      <table className="idsk-table">
        <thead className="idsk-table__head">
          <tr className="idsk-table__row">
            <th scope="col" className="idsk-table__header">
              <span className="th-span">Dátum</span>
            </th>
            <th scope="col" className="idsk-table__header">
              <span className="th-span">Podnet</span>
            </th>
            <th scope="col" className="idsk-table__header">
              <span className="th-span">Od používatela</span>
            </th>
          </tr>
        </thead>
        <tbody className="idsk-table__body">
          <tr className="idsk-table__row">
            <td className="idsk-table__cell">10.5.2022</td>
            <td className="idsk-table__cell">
              posledná konferencia bola super, 5 hviezd z 5
            </td>
            <td className="idsk-table__cell">Lukáš</td>
          </tr>
          <tr className="idsk-table__row">
            <td className="idsk-table__cell">29.4.2022</td>
            <td className="idsk-table__cell">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </td>
            <td className="idsk-table__cell">Anička</td>
          </tr>
          <tr className="idsk-table__row">
            <td className="idsk-table__cell">15.3.2022</td>
            <td className="idsk-table__cell">
              web lepsiesluzby.digital ma neaktuálne kontakty
            </td>
            <td className="idsk-table__cell">Martin</td>
          </tr>
          <tr className="idsk-table__row">
            <td className="idsk-table__cell">10.5.2022</td>
            <td className="idsk-table__cell">
              posledná konferencia bola super, 5 hviezd z 5
            </td>
            <td className="idsk-table__cell">Lukáš</td>
          </tr>
          <tr className="idsk-table__row">
            <td className="idsk-table__cell">29.4.2022</td>
            <td className="idsk-table__cell">
              jednotnuý dizajn manuál má nedoplnené návody
            </td>
            <td className="idsk-table__cell">Anička</td>
          </tr>
          <tr className="idsk-table__row">
            <td className="idsk-table__cell">15.3.2022</td>
            <td className="idsk-table__cell">
              web lepsiesluzby.digital ma neaktuálne kontakty
            </td>
            <td className="idsk-table__cell">Martin</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecentReportsOverview;

import Text from "./Text";

const Table = ({ title, rows }) => {
  return (
    <div>
      <h1>{title}</h1>
      <table>
        <tbody style={{ lineHeight: "0.1" }}>
          {rows.map((row) => (
            <tr key={row.id}>
              <td style={{ paddingRight: "10px" }}>
                <Text text={row.key} />
              </td>
              <td>
                <Text text={row.value} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

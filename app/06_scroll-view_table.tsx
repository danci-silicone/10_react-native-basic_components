import {
  View,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
// @ts-ignore
import { Table, Row } from "react-native-table-component";

const ScrollViewTableScreen = () => {
  const { width } = useWindowDimensions();
  const columnCount = 4;
  const columnWidth = (width * 0.8) / columnCount; // Smanjuje ukupnu širinu tabele za 20%

  const tableHead = ["Ime", "Prezime", "Godine", "Grad"];

  const tableData = [];
  for (let i = 1; i <= 50; i++) {
    tableData.push([
      `Ime${i}`,
      `Prezime${i}`,
      (15 + (i % 5)).toString(),
      `Grad${i}`,
    ]);
  }

  return (
    <ScrollView style={styles.dataWrapper}>
      <View style={styles.tableContainer}>
        <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
          <Row
            data={tableHead}
            style={styles.head}
            textStyle={styles.text}
            widthArr={Array(columnCount).fill(columnWidth)}
          />
          {tableData.map((rowData, index) => (
            <Row
              key={index}
              data={rowData}
              style={[styles.row, index % 2 && { backgroundColor: "#F7F6E7" }]}
              textStyle={styles.text}
              widthArr={Array(columnCount).fill(columnWidth)}
            />
          ))}
        </Table>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  head: { height: 50, backgroundColor: "#f1f8ff" },
  text: { margin: 6, textAlign: "center" },
  dataWrapper: { width: "100%" },
  row: { height: 40, backgroundColor: "#E7E6E1" },
  tableContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScrollViewTableScreen;

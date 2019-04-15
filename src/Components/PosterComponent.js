import React from "react";
import { Page, Text, View, Document } from "react-pdf";

// Create styles
const styles = {
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
};

// Create Document Component
const PosterComponent = ({ title, subtitle }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{title}</Text>
      </View>
      <View style={styles.section}>
        <Text>{subtitle}</Text>
      </View>
    </Page>
  </Document>
);

export default PosterComponent;

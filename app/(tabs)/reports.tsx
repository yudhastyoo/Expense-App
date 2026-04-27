import { Ionicons } from "@expo/vector-icons";
import { type ReactNode } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ReportsScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={18} color="#F3F7FF" />
        <Text style={styles.title}>Export Data</Text>
      </View>

      <Field label="Bulan">
        <View style={styles.input}>
          <Text style={styles.inputText}>April 2026</Text>
          <Ionicons name="calendar-outline" size={15} color="#ABB3C1" />
        </View>
      </Field>

      <Field label="Payment Type">
        <View style={styles.input}>
          <Text style={styles.inputText}>QRIS / VA / Debit Card BCA</Text>
          <Ionicons name="chevron-down" size={15} color="#ABB3C1" />
        </View>
      </Field>

      <Field label="Format">
        <View style={styles.input}>
          <Text style={styles.inputText}>CSV</Text>
          <Ionicons name="chevron-down" size={15} color="#ABB3C1" />
        </View>
      </Field>

      <TouchableOpacity style={styles.exportBtn} activeOpacity={0.85}>
        <Text style={styles.exportText}>Export CSV</Text>
      </TouchableOpacity>

      <View style={styles.outputCard}>
        <Text style={styles.outputTitle}>Output CSV (contoh):</Text>
        <Text style={styles.outputText}>
          date,nama,paymentType,nominal,type,notes{"\n"}
          2026-04-25,Toga Pizza,QRIS/payment,100000,{"\n"}
          QRIS / VA / Debit Card BCA,Lunch{"\n"}
          2026-04-25,Waring Leo - BK M Pizza,211400,{"\n"}
          QRIS / VA / Debit Card BCA,Dine-in
        </Text>
      </View>
    </ScrollView>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#06080B",
  },
  content: {
    paddingTop: 46,
    paddingHorizontal: 14,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 18,
  },
  title: {
    color: "#F5F8FF",
    fontSize: 20,
    fontWeight: "700",
  },
  field: {
    marginBottom: 12,
  },
  label: {
    color: "#AAB3C0",
    fontSize: 12,
    marginBottom: 5,
  },
  input: {
    minHeight: 38,
    backgroundColor: "#101318",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#1E232D",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputText: {
    color: "#E9EEF9",
    fontSize: 12,
  },
  exportBtn: {
    marginTop: 8,
    marginBottom: 14,
    height: 38,
    borderRadius: 8,
    backgroundColor: "#ECEFF3",
    alignItems: "center",
    justifyContent: "center",
  },
  exportText: {
    color: "#111318",
    fontWeight: "600",
    fontSize: 13,
  },
  outputCard: {
    backgroundColor: "#0F1318",
    borderWidth: 1,
    borderColor: "#1D232D",
    borderRadius: 8,
    padding: 10,
  },
  outputTitle: {
    color: "#E7EDF7",
    fontSize: 12,
    marginBottom: 6,
  },
  outputText: {
    color: "#97A0AF",
    fontSize: 10,
    lineHeight: 15,
  },
});

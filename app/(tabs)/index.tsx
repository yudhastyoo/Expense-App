import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
        <Ionicons name="notifications-outline" size={20} color="#F5F7FA" />
      </View>

      <View style={styles.summaryCard}>
        <View style={styles.rowBetween}>
          <Text style={styles.cardMeta}>April 2026</Text>
          <Ionicons name="chevron-down" size={16} color="#A0A7B3" />
        </View>
        <Text style={styles.cardLabel}>Total Pengeluaran</Text>
        <Text style={styles.totalAmount}>Rp1,151,050</Text>
        <View style={styles.rule} />
        <View style={styles.expensePreview}>
          <Text style={styles.previewMeta}>QRIS / VA / Debit Card BCA</Text>
          <Text style={styles.previewName}>Rep86,650</Text>
        </View>
        <View style={styles.rule} />
        <View style={styles.expensePreview}>
          <Text style={styles.previewMeta}>Jenis: Credit Card</Text>
          <Text style={styles.previewName}>Rp466,400</Text>
        </View>

        <Link href="/modal" asChild>
          <TouchableOpacity style={styles.addButton} activeOpacity={0.85}>
            <Text style={styles.addButtonText}>+ Tambah Pengeluaran</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <Text style={styles.sectionTitle}>Daftar Pengeluaran Terbaru</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listCard}>
          <View style={styles.rowBetween}>
            <Text style={styles.listDate}>26 Apr 2026</Text>
            <Text style={styles.listDate}>Jenis</Text>
          </View>
          <View style={styles.rule} />
          <View style={styles.itemRow}>
            <View>
              <Text style={styles.itemTitle}>Lawson - Shopee Food</Text>
              <Text style={styles.itemAmount}>Rp104,400</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#7A8290" />
          </View>
          <View style={[styles.rule, styles.itemSpacer]} />
          <View style={styles.itemRow}>
            <View>
              <Text style={styles.itemTitle}>SBN Exclusive - Tokopedia</Text>
              <Text style={styles.itemAmount}>Rp108,250</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#7A8290" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#06080B",
    paddingHorizontal: 14,
    paddingTop: 48,
  },
  header: {
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#F4F7FC",
    fontSize: 26,
    fontWeight: "700",
  },
  summaryCard: {
    backgroundColor: "#101318",
    borderWidth: 1,
    borderColor: "#1C212A",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardMeta: {
    color: "#AFB7C5",
    fontSize: 12,
  },
  cardLabel: {
    color: "#AFB7C5",
    fontSize: 12,
    marginTop: 10,
  },
  totalAmount: {
    color: "#F9FBFF",
    fontSize: 27,
    fontWeight: "700",
    marginTop: 2,
    marginBottom: 8,
  },
  rule: {
    height: 1,
    backgroundColor: "#1E242E",
    marginVertical: 8,
  },
  expensePreview: {
    gap: 3,
  },
  previewMeta: {
    color: "#9EA6B4",
    fontSize: 11,
  },
  previewName: {
    color: "#F4F6FA",
    fontSize: 18,
    fontWeight: "600",
  },
  addButton: {
    marginTop: 12,
    backgroundColor: "#ECEFF3",
    borderRadius: 8,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#111318",
    fontSize: 13,
    fontWeight: "600",
  },
  sectionTitle: {
    color: "#E8ECF5",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8,
  },
  listCard: {
    backgroundColor: "#0F1318",
    borderColor: "#1C212A",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 18,
  },
  listDate: {
    color: "#A0A8B4",
    fontSize: 11,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemTitle: {
    color: "#F2F5FA",
    fontSize: 12,
    marginBottom: 2,
  },
  itemAmount: {
    color: "#B4BBC8",
    fontSize: 12,
  },
  itemSpacer: {
    marginVertical: 10,
  },
});

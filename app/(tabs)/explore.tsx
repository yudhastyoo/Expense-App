import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ExploreScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Expenses</Text>
        <Ionicons name="funnel-outline" size={18} color="#EAF0FA" />
      </View>

      <View style={styles.input}>
        <Text style={styles.inputText}>April 2026</Text>
        <Ionicons name="chevron-down" size={16} color="#A3ABBA" />
      </View>

      <View style={styles.filterRow}>
        <TouchableOpacity style={[styles.input, styles.halfInput]} activeOpacity={0.8}>
          <Text style={styles.inputText}>All Payment Type</Text>
          <Ionicons name="chevron-down" size={16} color="#A3ABBA" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.input, styles.halfInput]} activeOpacity={0.8}>
          <Text style={styles.inputText}>All Category</Text>
          <Ionicons name="chevron-down" size={16} color="#A3ABBA" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.dateLabel}>25 Apr 2026</Text>
        <View style={styles.itemRow}>
          <View style={styles.leading}>
            <View style={styles.iconCircle}>
              <Ionicons name="cart-outline" size={14} color="#EAF0FA" />
            </View>
            <View>
              <Text style={styles.itemName}>Toga Pizza</Text>
              <Text style={styles.itemMeta}>QRIS / VA / Debit Card BCA</Text>
            </View>
          </View>
          <Text style={styles.itemAmount}>Rp100,000</Text>
        </View>

        <View style={styles.itemRow}>
          <View style={styles.leading}>
            <View style={styles.iconCircle}>
              <Ionicons name="cart-outline" size={14} color="#EAF0FA" />
            </View>
            <View>
              <Text style={styles.itemName}>Warung Leo - Blek Mi Pizza</Text>
              <Text style={styles.itemMeta}>QRIS / VA / Debit Card BCA</Text>
            </View>
          </View>
          <Text style={styles.itemAmount}>Rp211,400</Text>
        </View>

        <View style={styles.itemRow}>
          <View style={styles.leading}>
            <View style={styles.iconCircle}>
              <Ionicons name="cart-outline" size={14} color="#EAF0FA" />
            </View>
            <View>
              <Text style={styles.itemName}>Berry - Miniso</Text>
              <Text style={styles.itemMeta}>QRIS / VA / Debit Card BCA</Text>
            </View>
          </View>
          <Text style={styles.itemAmount}>Rp42,500</Text>
        </View>

        <Text style={styles.dateLabel}>26 Apr 2026</Text>
        <View style={styles.itemRow}>
          <View style={styles.leading}>
            <View style={styles.iconCircle}>
              <Ionicons name="cart-outline" size={14} color="#EAF0FA" />
            </View>
            <View>
              <Text style={styles.itemName}>Roti Bakar</Text>
              <Text style={styles.itemMeta}>QRIS / VA / Debit Card BCA</Text>
            </View>
          </View>
          <Text style={styles.itemAmount}>Rp22,900</Text>
        </View>
        <View style={styles.itemRow}>
          <View style={styles.leading}>
            <View style={styles.iconCircle}>
              <Ionicons name="cart-outline" size={14} color="#EAF0FA" />
            </View>
            <View>
              <Text style={styles.itemName}>Fruit</Text>
              <Text style={styles.itemMeta}>QRIS / VA / Debit Card BCA</Text>
            </View>
          </View>
          <Text style={styles.itemAmount}>Rp20,000</Text>
        </View>

        <View style={styles.totalCard}>
          <Text style={styles.totalValue}>Total</Text>
          <View style={styles.totalRow}>
            <Text style={styles.totalMeta}>5 Transaksi</Text>
            <Text style={styles.totalAmount}>Rp684,650</Text>
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
    paddingTop: 48,
    paddingHorizontal: 12,
  },
  header: {
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#F4F7FC",
    fontSize: 26,
    fontWeight: "700",
  },
  input: {
    height: 36,
    backgroundColor: "#101318",
    borderWidth: 1,
    borderColor: "#1D222B",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputText: {
    color: "#D5DCE8",
    fontSize: 12,
  },
  filterRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
  },
  halfInput: {
    flex: 1,
    marginBottom: 0,
  },
  dateLabel: {
    color: "#B0B9C7",
    fontSize: 12,
    marginTop: 10,
    marginBottom: 8,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  leading: {
    flexDirection: "row",
    gap: 8,
    flex: 1,
    paddingRight: 8,
  },
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: "#2D3542",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  itemName: {
    color: "#F4F8FF",
    fontSize: 12,
  },
  itemMeta: {
    color: "#8F98A8",
    fontSize: 10,
    marginTop: 1,
  },
  itemAmount: {
    color: "#F4F8FF",
    fontSize: 12,
    fontWeight: "600",
  },
  totalCard: {
    marginTop: 8,
    marginBottom: 22,
    backgroundColor: "#0F1318",
    borderWidth: 1,
    borderColor: "#1D232D",
    borderRadius: 8,
    padding: 10,
  },
  totalValue: {
    color: "#F4F8FF",
    fontSize: 12,
    marginBottom: 6,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalMeta: {
    color: "#8F98A8",
    fontSize: 11,
  },
  totalAmount: {
    color: "#F4F8FF",
    fontSize: 12,
    fontWeight: "700",
  },
});

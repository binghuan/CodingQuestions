using System;
using System.Collections.Generic;
using System.Linq;

namespace HealthCheckOptimizer
{


    class Program
    {
        static Dictionary<string, int> itemPrices = new Dictionary<string, int>
    {
        {"A1", 100}, {"A2", 100}, {"A3", 100}, {"A4", 100}, {"A5", 100},
        {"A6", 100}, {"A7", 100}, {"A10", 100}, {"A15", 100}, {"A20", 100},
        {"A25", 100}, {"A30", 100}
    };

        static Dictionary<string, List<string>> groups = new Dictionary<string, List<string>>
    {
        {"G1", new List<string> {"A1", "A2", "A3", "A4", "A5", "A6"}},
        {"G2", new List<string> {"A1", "A2", "A50"}},
        {"G3", new List<string> {"A1", "A2", "A3", "A4"}},
        {"G4", new List<string> {"A5", "A10", "A20", "A30"}},
        {"G5", new List<string> {"A5", "A6", "A10", "A15"}},
        {"G6", new List<string> {"A20", "A30"}},
        {"G7", new List<string> {"A20", "A25", "A30"}},
    };

        static Dictionary<string, double> groupDiscounts = new Dictionary<string, double>
    {
        {"G1", 0.9}, {"G2", 0.9}, {"G3", 0.9}, {"G4", 0.9},
        {"G5", 0.9}, {"G6", 0.9}, {"G7", 0.9}
    };

        static List<string> selectedItems = new List<string> {
        "A1","A2","A3","A4","A5","A6","A7","A10","A15","A20","A25","A30"
    };

        static double minCost = double.MaxValue;
        static List<string> bestCombo = new List<string>();

        static void Main()
        {
            var groupList = groups.Keys.ToList();
            FindBestCombination(0, new List<string>(), new HashSet<string>(), groupList);

            Console.WriteLine("最佳組合: " + string.Join(" + ", bestCombo));
            Console.WriteLine("最低金額: " + minCost);
        }

        static void FindBestCombination(int index, List<string> selectedGroups, HashSet<string> usedItems, List<string> groupList)
        {
            if (index >= groupList.Count)
            {
                var totalUsed = new HashSet<string>(usedItems);
                var allItems = new HashSet<string>(selectedItems);
                var remainingItems = allItems.Except(totalUsed);

                double cost = 0;

                // 折扣部分
                foreach (var g in selectedGroups)
                {
                    var gItems = groups[g].Where(itemPrices.ContainsKey);
                    double groupPrice = gItems.Sum(i => itemPrices[i]);
                    cost += groupPrice * groupDiscounts[g];
                }

                // 未折扣部分
                cost += remainingItems.Sum(i => itemPrices[i]);

                if (cost < minCost)
                {
                    minCost = cost;
                    bestCombo = new List<string>(selectedGroups);
                }
                return;
            }

            string currentGroup = groupList[index];
            var currentItems = groups[currentGroup].Where(itemPrices.ContainsKey).ToList();

            // 不選這組
            FindBestCombination(index + 1, selectedGroups, usedItems, groupList);

            // 選這組：前提是沒有重疊
            if (!currentItems.Any(i => usedItems.Contains(i)))
            {
                foreach (var item in currentItems)
                    usedItems.Add(item);

                selectedGroups.Add(currentGroup);
                FindBestCombination(index + 1, selectedGroups, usedItems, groupList);
                selectedGroups.RemoveAt(selectedGroups.Count - 1);
                foreach (var item in currentItems)
                    usedItems.Remove(item);
            }
        }
    }

}

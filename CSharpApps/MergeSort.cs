using System;

// Question: Write a function (in C# or C++) to merge two already sorted linked lists, 
// do not use recursion.
//
// It takes in two already sorted linked lists (in ascendant order, 
// duplicates allowed) and is supposed to merge them into a single sorted linked list (in ascendant order, 
// duplicates allowed) and returns the new head.
 

// ## How to build the app
// mcs MergeSort.cs 

// ## How to run to app. 
// mono MergeSort.exe

namespace MergeSort
{

	class Node
	{
		public int data;
		public Node next;
	};


	class MainClass
	{

		private static Node initData (int[] array)
		{

			Node rootNode = null;
			Node lastNode = null;
			for (int i = 0; i < array.Length; i++) {
				Node node = new Node ();
				node.data = array [i];
				Console.WriteLine ("input [" + i + "]: " + node.data);
				node.next = null;

				if (i == 0) {
					rootNode = node;
					lastNode = rootNode;
				} else {
					lastNode.next = node;
				}

				lastNode = node;
			}

			return rootNode;
		}

		private static void printData (Node node)
		{

			int counter = 0; 

			Node tempNode = node;
			while (true) {
				
				counter += 1; 
				Console.WriteLine ("[" + counter + "]: " + tempNode.data);

				if (tempNode.next != null) {
					tempNode = tempNode.next;
				} else {
					Console.WriteLine ("There is no next line");
					break;
				}

			}

		}

		private static Node Merge (Node head1, Node head2)
		{
			Console.WriteLine ("+++ Merge +++");

			Node lastNode = null;
			Node nodeA = head1;
			Node nodeB = head2;

			Node rootNode = null;
			while (true) {
				Node tempNode = new Node ();
				tempNode.next = null;

				if (nodeA == null && nodeB == null) {
					break;
				} else if (nodeA == null) {
					tempNode.data = nodeB.data;
					nodeB = nodeB.next;
				} else if (nodeB == null) {
					tempNode.data = nodeA.data;
					nodeA = nodeA.next;
				} else {
					if (nodeA.data < nodeB.data) {
						tempNode.data = nodeA.data;
						nodeA = nodeA.next;
					} else {
						tempNode.data = nodeB.data;
						nodeB = nodeB.next;
					}
				}

				if (rootNode == null) {
					rootNode = tempNode;
					lastNode = tempNode;
					Console.WriteLine ("Merge " + tempNode.data);
				} else {
					Console.WriteLine ("Merge " + tempNode.data);
					lastNode.next = tempNode;
				}

				lastNode = tempNode;

			}

			Console.WriteLine ("--- Merge ---");

			return rootNode;
		}

		public static void Main (string[] args)
		{
			Console.WriteLine ("Ready to run Merge Sort");

			// Create data for testing. 
			int[] array1 = new int[] { 1, 3, 5, 7, 9 };
			int[] array2 = new int[] { 2, 4, 6, 8, 10 };
//			int[] array1 = new int[] { 1, 3, 5, 7, 9 };
//			int[] array2 = new int[] { 2, 8, 10, 12, 14 };

			Console.WriteLine ("Init Data 1");
			Node head1 = initData (array1);
			Console.WriteLine ("Init Data 2");
			Node head2 = initData (array2);

			Node head = Merge (head1, head2);

			printData (head);

			Console.WriteLine ("End of Merge Sort");

		}
	}
}

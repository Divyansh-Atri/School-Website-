#include <iostream>
#include <vector>
#include <queue>
#include <limits>
#include <unordered_map>
#include <utility>

using Int64 = long long;
using CostVertexPair = std::pair<Int64, int>;

const Int64 INFINITY_COST = std::numeric_limits<Int64>::max();

void compute_shortest_paths(int total_nodes,
                            const std::vector<std::vector<CostVertexPair>>& graph,
                            std::vector<Int64>& shortest_distances) {
    std::priority_queue<CostVertexPair, std::vector<CostVertexPair>, std::greater<CostVertexPair>> min_heap;

    shortest_distances[1] = 0;
    min_heap.push({0, 1});

    while (!min_heap.empty()) {
        Int64 current_dist = min_heap.top().first;
        int current_node = min_heap.top().second;
        min_heap.pop();

        if (current_dist > shortest_distances[current_node]) {
            continue;
        }

        for (const auto& neighbor_edge : graph[current_node]) {
            int neighbor_node = neighbor_edge.first;
            Int64 edge_weight = neighbor_edge.second;

            if (shortest_distances[current_node] != INFINITY_COST &&
                shortest_distances[current_node] + edge_weight < shortest_distances[neighbor_node])
            {
                shortest_distances[neighbor_node] = shortest_distances[current_node] + edge_weight;
                min_heap.push({shortest_distances[neighbor_node], neighbor_node});
            }
        }
    }
}

struct TrainRoute {
    int station_node;
    Int64 cost;
};

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);

    int node_count, road_count, train_count;
    std::cin >> node_count >> road_count >> train_count;

    std::vector<std::vector<CostVertexPair>> road_adj_list(node_count + 1);
    for (int i = 0; i < road_count; ++i) {
        int u_node, v_node;
        Int64 road_cost;
        std::cin >> u_node >> v_node >> road_cost;
        road_adj_list[u_node].emplace_back(v_node, road_cost);
        road_adj_list[v_node].emplace_back(u_node, road_cost);
    }

    std::vector<Int64> dist_via_roads(node_count + 1, INFINITY_COST);
    compute_shortest_paths(node_count, road_adj_list, dist_via_roads);

    std::vector<std::vector<CostVertexPair>> full_adj_list = road_adj_list;
    std::vector<TrainRoute> train_routes(train_count);
    for (int i = 0; i < train_count; ++i) {
        int station_node;
        Int64 train_cost;
        std::cin >> station_node >> train_cost;
        full_adj_list[1].emplace_back(station_node, train_cost);
        full_adj_list[station_node].emplace_back(1, train_cost);
        train_routes[i] = {station_node, train_cost};
    }

    std::vector<Int64> dist_combined(node_count + 1, INFINITY_COST);
    compute_shortest_paths(node_count, full_adj_list, dist_combined);

    std::unordered_map<int, int> min_cost_train_map;
    int discarded_train_count = 0;

    for (const auto& route : train_routes) {
        int current_station = route.station_node;
        Int64 current_train_cost = route.cost;

        if (current_train_cost > dist_combined[current_station]) {
            discarded_train_count++;
        }
        else if (current_train_cost == dist_combined[current_station]) {
            if (dist_via_roads[current_station] <= dist_combined[current_station]) {
                 discarded_train_count++;
            }
            else {
                min_cost_train_map[current_station]++;
            }
        }
    }

    for (const auto& map_entry : min_cost_train_map) {
        if (map_entry.second > 1) {
            discarded_train_count += (map_entry.second - 1);
        }
    }

    std::cout << discarded_train_count << "\n";

    return 0;
}
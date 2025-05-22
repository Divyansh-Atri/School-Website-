#include <iostream>
#include <vector>
#include <queue>
#include <climits>
#include <unordered_map>

using namespace std;

typedef long long ll;
typedef pair<ll, ll> pll;

const ll INF = LLONG_MAX;

void dijkstra(int n, vector<vector<pll>>& adj, vector<ll>& dist) {
    priority_queue<pll, vector<pll>, greater<pll>> pq;
    dist[1] = 0;
    pq.push({0, 1});

    while (!pq.empty()) {
        ll d = pq.top().first;
        int u = pq.top().second;
        pq.pop();

        if (d > dist[u]) continue;

        for (auto& edge : adj[u]) {
            int v = edge.first;
            ll w = edge.second;

            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m, k;
    cin >> n >> m >> k;

    vector<vector<pll>> adj_roads(n + 1);
    for (int i = 0; i < m; ++i) {
        int u, v;
        ll x;
        cin >> u >> v >> x;
        adj_roads[u].emplace_back(v, x);
        adj_roads[v].emplace_back(u, x);
    }

    vector<ll> road_dist(n + 1, INF);
    dijkstra(n, adj_roads, road_dist);

    vector<vector<pll>> adj_all = adj_roads;
    vector<pair<int, ll>> trains;
    for (int i = 0; i < k; ++i) {
        int s;
        ll y;
        cin >> s >> y;
        adj_all[1].emplace_back(s, y);
        adj_all[s].emplace_back(1, y);
        trains.emplace_back(s, y);
    }
    vector<ll> optimal_dist(n + 1, INF);
    dijkstra(n, adj_all, optimal_dist);

    unordered_map<int, int> count_min_trains;
    int rejectable = 0;

    for (auto& train : trains) {
        int s = train.first;
        ll y = train.second;

        if (y > optimal_dist[s]) {
            rejectable++;
        } else if (y == optimal_dist[s]) {
            if (road_dist[s] <= optimal_dist[s]) {
                rejectable++;
            } else {
                count_min_trains[s]++;
            }
        }
    }
    for (auto& entry : count_min_trains) {
        rejectable += (entry.second - 1);
    }

    cout << rejectable << endl;

    return 0;
}

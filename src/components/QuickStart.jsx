import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch],
  );

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <>
            📝 <Text strong>Develop by Donald</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📄">
            <Text style={styles.text}>we can use wallet</Text>
          </Timeline.Item>

          <Timeline.Item dot="💿">
            <Text style={styles.text}>Dex</Text>
          </Timeline.Item>

          <Timeline.Item dot="🧰">
            <Text style={styles.text}>Fiat</Text>
          </Timeline.Item>

          <Timeline.Item dot="💾">
            <Text style={styles.text}>Can see your balance</Text>
          </Timeline.Item>

          <Timeline.Item dot="🔏">
            <Text style={styles.text}>Transfer</Text>
          </Timeline.Item>

          <Timeline.Item dot="🔁">
            <Text style={styles.text}>Nft</Text>
          </Timeline.Item>

          <Timeline.Item dot="💿">
            <Text style={styles.text}>It is an entry</Text>
          </Timeline.Item>

          <Timeline.Item dot="🚀">
            <Text style={styles.text}>BUIDL!!!</Text>
          </Timeline.Item>
        </Timeline>
      </Card>
      <div>
        <Card
          style={styles.card}
          title={
            <>
              💣 <Text strong>Starting Local Chain</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>Install</Text>
            </Timeline.Item>

            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>Start</Text>
            </Timeline.Item>

            <Timeline.Item dot="📡">
              <Text style={styles.text}>Deploy</Text>
            </Timeline.Item>

            <Timeline.Item dot="✅" style={styles.text}>
              <Text style={styles.text}>Open</Text>
            </Timeline.Item>
          </Timeline>
        </Card>
        <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              📡{" "}
              <Text strong> Connecting your Local Chain</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>Download</Text>
            </Timeline.Item>

            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>Connect</Text>
            </Timeline.Item>

            <Timeline.Item dot="💾">
              <Text style={styles.text}>Add contract</Text>
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    </div>
  );
}

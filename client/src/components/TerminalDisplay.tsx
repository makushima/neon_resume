import { motion } from "framer-motion";

const TerminalDisplay = () => {
  return (
    <div className="bg-background rounded-xl overflow-hidden border border-gray-800">
      <div className="bg-card px-4 py-2 border-b border-gray-800 flex items-center">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="font-mono text-sm text-muted-foreground">~/projects/infrastructure-automation</span>
      </div>
      <div className="p-6 font-mono text-sm">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-2">
            <span className="text-blue-400">$</span> 
            <span className="text-foreground"> kubectl get pods -n monitoring</span>
          </div>
          <div className="text-green-400 mb-4">
            NAME                                  READY   STATUS    RESTARTS   AGE<br />
            prometheus-server-5f74d4548d-xvkgj    2/2     Running   0          7d<br />
            grafana-deployment-867b6c898f-2vqpn   1/1     Running   0          7d<br />
            alertmanager-6c4b6bdc6-dlkm9          1/1     Running   0          7d<br />
            node-exporter-gbn5z                   1/1     Running   0          7d<br />
            node-exporter-jwkf7                   1/1     Running   0          7d<br />
            node-exporter-px8zq                   1/1     Running   0          7d
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="mb-2">
            <span className="text-blue-400">$</span> 
            <span className="text-foreground"> terraform apply -auto-approve</span>
          </div>
          <div className="text-green-400 mb-4">
            Initializing...<br />
            Applying changes...<br />
            <br />
            Apply complete! Resources: 7 added, 3 changed, 2 destroyed.<br />
            <br />
            Outputs:<br />
            <br />
            cluster_endpoint = "eks-cluster.eu-west-1.eks.amazonaws.com"<br />
            load_balancer_ip = "13.45.67.89"
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div>
            <span className="text-blue-400">$</span> 
            <span className="text-foreground relative after:content-['|'] after:ml-1 after:animate-[blink_1s_step-end_infinite] after:text-[#4ADE80]">_</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TerminalDisplay;

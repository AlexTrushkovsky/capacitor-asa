import Foundation
import Capacitor

@objc(ASAIDPlugin)
public class ASAIDPlugin: CAPPlugin {
    private let implementation = ASAID()

    @objc func getASAID(_ call: CAPPluginCall) {
        let token = implementation.getASAID()
        call.resolve([
            "token": token,
        ])
    }
}
